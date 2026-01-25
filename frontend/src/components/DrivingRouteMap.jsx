import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { drivingRoute } from '../data/mock';
import { MapPin, Clock, Navigation, CheckCircle, ChevronRight, Play, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icons
const createCustomIcon = (type, number) => {
  const colors = {
    start: { bg: '#22c55e', border: '#16a34a', icon: '▶' },
    end: { bg: '#22c55e', border: '#16a34a', icon: '◀' },
    waypoint: { bg: '#f97316', border: '#ea580c', icon: number }
  };
  const color = colors[type] || colors.waypoint;
  
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        position: relative;
        width: 32px;
        height: 32px;
      ">
        <div style="
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, ${color.bg}, ${color.border});
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 12px;
        ">${color.icon}</div>
        ${type === 'start' || type === 'end' ? `
        <div style="
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          background: ${type === 'start' ? '#22c55e' : '#22c55e'};
          color: white;
          font-size: 8px;
          font-weight: bold;
          padding: 2px 6px;
          border-radius: 4px;
          white-space: nowrap;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        ">${type === 'start' ? 'START' : 'END'}</div>
        ` : ''}
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });
};

// Map bounds fitter component
const FitBounds = ({ coords }) => {
  const map = useMap();
  useEffect(() => {
    if (coords.length > 0) {
      const bounds = L.latLngBounds(coords);
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [map, coords]);
  return null;
};

// Animated route component
const AnimatedRoute = ({ path, isAnimating, animationProgress }) => {
  const visiblePath = isAnimating 
    ? path.slice(0, Math.floor(path.length * animationProgress))
    : path;

  return (
    <>
      {/* Shadow/glow effect */}
      <Polyline
        positions={path}
        pathOptions={{
          color: '#f97316',
          weight: 12,
          opacity: 0.2,
          lineCap: 'round',
          lineJoin: 'round'
        }}
      />
      {/* Main route line */}
      <Polyline
        positions={visiblePath}
        pathOptions={{
          color: '#f97316',
          weight: 5,
          opacity: 1,
          lineCap: 'round',
          lineJoin: 'round'
        }}
      />
      {/* Animated dashed overlay */}
      <Polyline
        positions={path}
        pathOptions={{
          color: '#fbbf24',
          weight: 3,
          opacity: 0.6,
          dashArray: '10, 10',
          lineCap: 'round',
          lineJoin: 'round'
        }}
      />
    </>
  );
};

const DrivingRouteMap = () => {
  const [activeWaypoint, setActiveWaypoint] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(1);

  const routePath = drivingRoute.routePath;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animate through the route
  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationProgress(0);
    setActiveWaypoint(0);
    
    let progress = 0;
    const totalSteps = 100;
    const waypointInterval = totalSteps / (drivingRoute.waypoints.length - 1);
    
    const interval = setInterval(() => {
      progress += 1;
      setAnimationProgress(progress / totalSteps);
      
      // Update active waypoint based on progress
      const currentWaypoint = Math.min(
        Math.floor(progress / waypointInterval),
        drivingRoute.waypoints.length - 1
      );
      setActiveWaypoint(currentWaypoint);
      
      if (progress >= totalSteps) {
        clearInterval(interval);
        setIsAnimating(false);
        setAnimationProgress(1);
      }
    }, 50);
  };

  const resetAnimation = () => {
    setAnimationProgress(1);
    setActiveWaypoint(0);
    setIsAnimating(false);
  };

  return (
    <section id="route" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full mb-6">
            <Navigation className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-semibold uppercase tracking-wider">Sample Lesson Route</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Your 1-Hour
            <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Circular Mastery Route</span>
          </h2>
          <p className="text-lg text-slate-400">
            A complete loop through Plympton, Marion & Glenelg. 
            Start and finish at the same spot - just like a real lesson!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Route info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Route stats */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">{drivingRoute.name}</h3>
              </div>
              
              {/* Animation controls */}
              <div className="flex gap-2 mb-6">
                <Button
                  onClick={startAnimation}
                  disabled={isAnimating}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Driving...' : 'Start Route'}
                </Button>
                <Button
                  onClick={resetAnimation}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-100"
                    style={{ width: `${animationProgress * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-400">
                  <span>Start</span>
                  <span>{Math.round(animationProgress * 100)}% Complete</span>
                  <span>End</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <Clock className="w-5 h-5 text-orange-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{drivingRoute.duration}</div>
                  <div className="text-slate-400 text-sm">Duration</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <MapPin className="w-5 h-5 text-amber-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{drivingRoute.distance}</div>
                  <div className="text-slate-400 text-sm">Full Loop</div>
                </div>
              </div>

              {/* Waypoints list */}
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {drivingRoute.waypoints.map((waypoint, index) => (
                  <div
                    key={waypoint.id}
                    onClick={() => setActiveWaypoint(index)}
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeWaypoint === index
                        ? 'bg-orange-500/20 border border-orange-500/30'
                        : 'bg-white/5 hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      waypoint.type === 'start' ? 'bg-emerald-500 text-white' :
                      waypoint.type === 'end' ? 'bg-emerald-500 text-white' :
                      'bg-orange-500 text-white'
                    }`}>
                      {waypoint.type === 'start' ? '▶' : waypoint.type === 'end' ? '◀' : index}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white text-sm truncate">{waypoint.name}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{waypoint.description}</div>
                      {activeWaypoint === index && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {waypoint.skills.map((skill, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-white/10 text-orange-300 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <ChevronRight className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform ${
                      activeWaypoint === index ? 'rotate-90 text-orange-400' : ''
                    }`} />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Ready to drive this route?</h4>
              <p className="text-white/80 text-sm mb-4">Book a lesson and master Southern Adelaide's roads</p>
              <Button
                onClick={scrollToContact}
                className="w-full bg-white text-orange-600 hover:bg-white/90 font-semibold"
              >
                Book This Lesson
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
              <div className="h-[500px] lg:h-[600px] rounded-xl overflow-hidden relative">
                {/* Circular route badge */}
                <div className="absolute top-4 left-4 z-[1000] bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-white text-xs font-medium">Circular Route</span>
                  </div>
                </div>

                <MapContainer
                  center={[-34.9750, 138.5350]}
                  zoom={13}
                  scrollWheelZoom={false}
                  className="h-full w-full"
                  style={{ background: '#1e293b' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                  />
                  <FitBounds coords={routePath} />
                  
                  {/* Animated route */}
                  <AnimatedRoute 
                    path={routePath} 
                    isAnimating={isAnimating}
                    animationProgress={animationProgress}
                  />

                  {/* Waypoint markers */}
                  {drivingRoute.waypoints.map((waypoint, index) => (
                    <Marker
                      key={waypoint.id}
                      position={waypoint.coords}
                      icon={createCustomIcon(waypoint.type, index)}
                      eventHandlers={{
                        click: () => setActiveWaypoint(index)
                      }}
                    >
                      <Popup className="custom-popup">
                        <div className="font-semibold text-slate-800">{waypoint.name}</div>
                        <div className="text-sm text-slate-600">{waypoint.description}</div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>

              {/* Route highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                {drivingRoute.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingRouteMap;
