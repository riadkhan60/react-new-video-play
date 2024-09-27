# React Video Player

A customizable and feature-rich video player component for React applications.

## Features

- Play/pause functionality
- Progress bar with seek capability
- Volume control with mute toggle
- Fullscreen toggle
- Customizable UI elements
- Thumbnail support
- Responsive design

## Installation

Install the package using npm:

```bash
npm install react-video-player-component
```

Or using yarn:

```bash
yarn add react-video-player-component
```

## Usage

Import the component in your React application:

```jsx
import ReactVideoPlay from 'react-video-player-component';

function App() {
  return (
    <ReactVideoPlay
      videosrc="/path/to/your/video.mp4"
      thumbnailsrc="/path/to/your/thumbnail.jpg"
    />
  );
}
```

## Props

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| thumbnailsrc | string | - | URL of the video thumbnail image |
| videosrc | string | - | URL of the video file |
| trackheight | string | '4px' | Height of the progress bar track |
| thumbsize | string | '12px' | Size of the progress bar thumb |
| color | string | '#ffffff' | Primary color for UI elements |
| backgroundcolor | string | 'transparent' | Background color for UI elements |
| hovercolor | string | '#ffffff' | Color of UI elements on hover |
| hoverbackgroundcolor | string | '#B7E0FF' | Background color of UI elements on hover |
| className | string | '' | Custom class for the main container |
| aspectRatio | string | '' | Aspect ratio of the video container |
| cover | 'cover' \| 'contain' \| 'fill' \| 'none' \| 'scale-down' | 'contain' | Object-fit property for the video |
| customeIcons | object | - | Custom icons for player controls (see detailed section below) |
| buttonRadius | string | '' | Border radius for control buttons |

### CSS Class Props

| Prop Name | Description |
|-----------|-------------|
| videoContainerClass | Class for the video container |
| thumabnailClass | Class for the thumbnail image |
| videoClass | Class for the video element |
| middleButtonContainerClass | Class for the middle play button container |
| buttonGroupClassName | Class for the control buttons group |
| iconClassName | Class for individual icons |
| controllerContainerClass | Class for the controls container |

## Customization

You can customize the appearance and behavior of the video player by passing props to the `ReactVideoPlay` component. Use the provided CSS class props to apply your own styles, or pass custom icons through the `customeIcons` prop.

### Custom Icons

The `customeIcons` prop allows you to replace the default icons with your own custom icons. This prop accepts an object with the following properties:

```typescript
interface customIconsProps {
  middleButton?: JSX.Element;
  playButton?: JSX.Element;
  volumeButton?: JSX.Element;
  muteButton?: JSX.Element;
  pauseButton?: JSX.Element;
  minimizeButton?: JSX.Element;
  maximizeButton?: JSX.Element;
}
```

Each property corresponds to a specific icon in the video player:

- `middleButton`: The large play button displayed in the center of the video when it's not playing
- `playButton`: The play button in the control bar
- `volumeButton`: The volume icon when the video is not muted
- `muteButton`: The mute icon when the video is muted
- `pauseButton`: The pause button in the control bar
- `minimizeButton`: The button to exit fullscreen mode
- `maximizeButton`: The button to enter fullscreen mode

To use custom icons, you can pass your own React elements to these properties. For example:

```jsx
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

function App() {
  const customIcons = {
    playButton: <FaPlay />,
    pauseButton: <FaPause />,
    muteButton: <FaVolumeMute />,
    volumeButton: <FaVolumeUp />,
  };

  return (
    <ReactVideoPlay
      videosrc="/path/to/your/video.mp4"
      customeIcons={customIcons}
    />
  );
}
```

This allows you to use icons from popular icon libraries or your own custom SVG icons, giving you full control over the look and feel of the video player controls.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.
