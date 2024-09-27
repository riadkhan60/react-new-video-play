'use client';
import React, { useState, useRef, useEffect } from 'react';

import CustomSlider from './components/CustomSlider';
import { CustomButton as Button } from './components/CustomeButton';
import PlayerIcon from './Icons/PlayerIcon';
import VolumeIcon from './Icons/VolumeIcon';
import MuteIcon from './Icons/MuteIcon';
import PauseIcon from './Icons/PauseIcon';
import MinimizeIcon from './Icons/Minimize';
import MaximizeIcon from './Icons/Maximize';
import PlayButton from './components/PlayButton';

interface customIconsProps {
  middleButton?: JSX.Element;
  playButton?: JSX.Element;
  volumeButton?: JSX.Element;
  muteButton?: JSX.Element;
  pauseButton?: JSX.Element;
  minimizeButton?: JSX.Element;
  maximizeButton?: JSX.Element;
}

interface CustomVideoPlayerProps {
  thumbnailsrc?: string;
  videosrc?: string;
  trackheight?: string;
  thumbsize?: string;
  color?: string;
  backgroundcolor?: string;
  hovercolor?: string;
  hoverbackgroundcolor?: string;
  className?: string;
  videoContainerClass?: string;
  thumabnailClass?: string;
  videoClass?: string;
  middleButtonContainerClass?: string;
  buttonGroupClassName?: string;
  iconClassName?: string;
  aspectRatio?: string;
  cover?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  customeIcons?: customIconsProps;
  controllerContainerClass?: string;
  buttonRadius?: string;
  slideOptions?: SlideOptions;
}

interface thumbOptions {
  thumbsize?: string;
  thumbcolor?: string;
  thumbradius?: string;
  thumbborder?: string;
  thumbboxshadow?: string;
  hoverthumbborder?: string;
  hoverthumbcolor?: string;
}

interface SlideOptions {
  thumbOptions?: thumbOptions;
  voluemStep?: number;
  progressStep?: number;
  volumeSlideWidth?: string;
  arialabel?: string;
}

export default function ReactVideoPlay({
  thumbnailsrc,
  videosrc,
  trackheight = '4px',
  thumbsize = '12px',
  color = '#ffffff',
  backgroundcolor = 'transparent',
  hovercolor = '#ffffff',
  hoverbackgroundcolor = '#B7E0FF',
  className = '',
  aspectRatio = '',
  thumabnailClass = '',
  videoContainerClass = '',
  videoClass = '',
  middleButtonContainerClass = '',
  controllerContainerClass = '',
  iconClassName = '',
  buttonGroupClassName = '',
  cover = 'contain',
  customeIcons,
  buttonRadius = '',
  slideOptions = {
    thumbOptions: {
      thumbsize: '12px',
      thumbcolor: '',
      thumbradius: '',
      thumbborder: '',
      thumbboxshadow: '',
      hoverthumbborder: '',
      hoverthumbcolor: '',
    },
    voluemStep: 1,
    volumeSlideWidth: '100px',
    progressStep: 0.1,
    arialabel: '',
  },
}: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    const handleLoadedData = () => {
      setIsLoaded(true);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadeddata', handleLoadedData);
    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setShowControls(true);
    }
  };

  const handleProgressChange = (newValue: number[]) => {
    if (videoRef.current) {
      const newTime = (newValue[0] / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(newValue[0]);
    }
  };

  const handleVolumeChange = (newValue: number[]) => {
    if (videoRef.current) {
      const newVolume = newValue[0] / 100;
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (isMuted) {
        videoRef.current.volume = volume;
      } else {
        setVolume(videoRef.current.volume);
        videoRef.current.volume = 0;
      }
    }
  };
 const toggleFullscreen = () => {
   const container = containerRef.current;

   // Check if fullscreen is already active
   if (!document.fullscreenElement && container) {
     container
       .requestFullscreen()
       .then(() => {
         // After entering fullscreen, lock orientation to landscape (if supported)
         if (window.screen.orientation && window.screen.orientation.lock) {
           window.screen.orientation.lock('landscape').catch((err: Error) => {
             console.warn('Failed to lock orientation to landscape:', err);
           });
         }
         // Set the state to fullscreen
         setIsFullscreen(true);
       })
       .catch((err: Error) => {
         console.error('Error attempting to enable fullscreen:', err);
       });
   } else {
     // Exit fullscreen
     document
       .exitFullscreen()
       .then(() => {
         // Unlock orientation if needed (return to default orientation)
         if (window.screen.orientation && window.screen.orientation.unlock) {
           window.screen.orientation.unlock();
         }
         // Set the state to non-fullscreen
         setIsFullscreen(false);
       })
       .catch((err: Error) => {
         console.error('Error attempting to exit fullscreen:', err);
       });
   }
 };

  const handleMouseEnter = () => setShowControls(true);
  const handleMouseLeave = () => {
    if (!isPlaying) {
      setShowControls(false);
    }
    if (isPlaying) {
      setShowControls(false);
    }
  };

  return (
    <div
      ref={containerRef}
      style={
        className
          ? {}
          : {
              maxWidth: '56rem',
              height: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: '#000000',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow:
                '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              position: 'relative',
            }
      }
      className={`${className ? className : 'container'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={
          videoContainerClass
            ? {}
            : {
                position: 'relative',
                width: '100%',
                height: aspectRatio ? 'auto' : '100%',
                aspectRatio: aspectRatio,
              }
        }
        className={videoContainerClass}
      >
        {thumbnailsrc && (
          <img
            src={thumbnailsrc}
            alt="Video thumbnail"
            style={
              thumabnailClass
                ? {}
                : {
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    transition: 'opacity 0.3s ease',
                    opacity: isPlaying || isLoaded ? 0 : 1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }
            }
            className={thumabnailClass}
          />
        )}
        <video
          ref={videoRef}
          className={videoClass}
          style={
            videoClass
              ? {}
              : { objectFit: cover, width: '100%', height: '100%' }
          }
          src={videosrc}
          onClick={togglePlay}
        />
        {!isPlaying && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className={middleButtonContainerClass}
          >
            {customeIcons?.middleButton ? (
              <div onClick={togglePlay}>{customeIcons?.middleButton}</div>
            ) : (
              <PlayButton
                hoverbackgroundcolor={hoverbackgroundcolor}
                togglePlay={togglePlay}
              >
                <PlayerIcon
                  style={iconClassName ? {} : { height: '40px', width: '40px' }}
                  className={iconClassName}
                />
              </PlayButton>
            )}
          </div>
        )}
        {showControls && (
          <div
            style={
              controllerContainerClass
                ? {}
                : {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundImage:
                      'linear-gradient(to top, black, transparent)',
                    padding: '1rem',
                  }
            }
            className={controllerContainerClass}
          >
            <div
              style={
                buttonGroupClassName
                  ? {}
                  : {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      marginBottom: '0.6rem',
                    }
              }
              className="buttonGroupClassName"
            >
              <Button
                $variant="ghost"
                size="icon"
                color={color}
                $hoverbackgroundcolor={hoverbackgroundcolor}
                $hovercolor={hovercolor}
                $backgroundcolor={backgroundcolor}
                $buttonradius={buttonRadius}
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <>
                    {customeIcons?.pauseButton ? (
                      customeIcons?.pauseButton
                    ) : (
                      <PauseIcon
                        style={{ height: '24px', width: '24px' }}
                        className={iconClassName}
                      />
                    )}
                  </>
                ) : (
                  <>
                    {customeIcons?.playButton ? (
                      customeIcons?.playButton
                    ) : (
                      <PlayerIcon
                        style={{ height: '24px', width: '24px' }}
                        className={iconClassName}
                      />
                    )}
                  </>
                )}
              </Button>

              <Button
                $variant="ghost"
                size="icon"
                color={color}
                $hoverbackgroundcolor={hoverbackgroundcolor}
                $hovercolor={hovercolor}
                $backgroundcolor={backgroundcolor}
                onClick={toggleMute}
              >
                {isMuted ? (
                  <>
                    {customeIcons?.muteButton ? (
                      customeIcons?.muteButton
                    ) : (
                      <MuteIcon
                        style={{ height: '24px', width: '24px' }}
                        className={iconClassName}
                      />
                    )}
                  </>
                ) : (
                  <>
                    {customeIcons?.volumeButton ? (
                      customeIcons?.volumeButton
                    ) : (
                      <VolumeIcon
                        style={{ height: '24px', width: '24px' }}
                        className={iconClassName}
                      />
                    )}
                  </>
                )}
              </Button>
              <CustomSlider
                defaultvalue={[50]}
                value={[isMuted ? 0 : volume * 100]}
                minvalue={0}
                maxvalue={100}
                step={slideOptions?.progressStep || 1}
                width={slideOptions?.volumeSlideWidth}
                height="7px"
                trackcolor="rgba(255, 255, 255, 0.2)"
                rangecolor={color}
                thumbcolor={slideOptions?.thumbOptions?.thumbcolor || color}
                hoverthumbborder={slideOptions?.thumbOptions?.hoverthumbborder}
                hoverthumbcolor={slideOptions?.thumbOptions?.hoverthumbcolor}
                thumbsize={thumbsize || slideOptions?.thumbOptions?.thumbsize}
                thumbradius={slideOptions?.thumbOptions?.thumbradius}
                thumbborder={slideOptions?.thumbOptions?.thumbborder}
                thumbboxshadow={slideOptions?.thumbOptions?.thumbboxshadow}
                trackheight={trackheight}
                onvaluechangefunc={handleVolumeChange}
              />
              <Button
                style={{ marginLeft: 'auto' }}
                $variant="ghost"
                size="icon"
                color={color}
                $hoverbackgroundcolor={hoverbackgroundcolor}
                $hovercolor={hovercolor}
                $backgroundcolor={backgroundcolor}
                onClick={toggleFullscreen}
              >
                {isFullscreen ? (
                  <>
                    {customeIcons?.minimizeButton ? (
                      customeIcons?.minimizeButton
                    ) : (
                      <MinimizeIcon
                        style={{ height: '24px', width: '24px' }}
                        className={iconClassName}
                      />
                    )}
                  </>
                ) : (
                  <>
                    {customeIcons?.maximizeButton ? (
                      customeIcons?.maximizeButton
                    ) : (
                      <MaximizeIcon
                        style={{ height: '24px', width: '24px' }}
                        className={iconClassName}
                      />
                    )}
                  </>
                )}
              </Button>
            </div>

            <CustomSlider
              value={[progress]}
              defaultvalue={[0]}
              minvalue={0}
              maxvalue={100}
              step={slideOptions?.progressStep || 0.1}
              width="100%"
              height="7px"
              trackcolor="rgba(255, 255, 255, 0.2)"
              rangecolor={hoverbackgroundcolor}
              thumbcolor={
                slideOptions?.thumbOptions?.thumbcolor || hoverbackgroundcolor
              }
              arialabel={slideOptions?.arialabel}
              hoverthumbborder={slideOptions?.thumbOptions?.hoverthumbborder}
              hoverthumbcolor={slideOptions?.thumbOptions?.hoverthumbcolor}
              thumbsize={thumbsize || slideOptions?.thumbOptions?.thumbsize}
              thumbradius={slideOptions?.thumbOptions?.thumbradius}
              thumbborder={slideOptions?.thumbOptions?.thumbborder}
              thumbboxshadow={slideOptions?.thumbOptions?.thumbboxshadow}
              trackheight={trackheight}
              onvaluechangefunc={handleProgressChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
