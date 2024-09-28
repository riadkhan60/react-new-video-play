# React New Video Play

A customizable and feature-rich video player component for React applications.

## Features

- Play/pause functionality
- Progress bar with seek capability
- Volume control with mute toggle
- Fullscreen toggle
- Customizable UI elements
- Thumbnail support
- Responsive design
- Custom icons support
- Adjustable slider options

## Installation

Install the package using npm:

```bash
npm i react-new-video-play
```

Or using yarn:

```bash
yarn add react-new-video-play
```

## Usage

Import the component in your React application:

```jsx
import ReactVideoPlay from 'react-new-video-play';

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
| customeIcons | object | - | Custom icons for player controls |
| buttonRadius | string | '' | Border radius for control buttons |
| slideOptions | object | - | Options for customizing sliders |
| autoPlay | boolean | false |  For autoplay |

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

### Custom Icons

The `customeIcons` prop allows you to replace the default icons with your own custom icons:

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

### Slider Options

The `slideOptions` prop allows you to customize the behavior and appearance of the sliders:

```typescript
interface SlideOptions {
  thumbOptions?: {
    thumbsize?: string;
    thumbcolor?: string;
    thumbradius?: string;
    thumbborder?: string;
    thumbboxshadow?: string;
    hoverthumbborder?: string;
    hoverthumbcolor?: string;
  };
  voluemStep?: number;
  progressStep?: number;
  volumeSlideWidth?: string;
  arialabel?: string;
}
```

## Example with Custom Options

```jsx
import ReactVideoPlay from 'react-new-video-play';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

function App() {
  const customIcons = {
    playButton: <FaPlay />,
    pauseButton: <FaPause />,
    volumeButton: <FaVolumeUp />,
    muteButton: <FaVolumeMute />,
  };

  const slideOptions = {
    thumbOptions: {
      thumbsize: '16px',
      thumbcolor: '#ff0000',
    },
    volumeSlideWidth: '120px',
    progressStep: 0.5,
  };

  return (
    <ReactVideoPlay
      videosrc="/path/to/your/video.mp4"
      thumbnailsrc="/path/to/your/thumbnail.jpg"
      customeIcons={customIcons}
      slideOptions={slideOptions}
      color="#ff0000"
      hoverbackgroundcolor="#ffcccc"
    />
  );
}
```
### ⚠️ Disclaimer

**Modifying the Main Container**:  

Adding a `className` to the main container element will override all default styles. Please ensure you fully understand the code before making any changes, as this can significantly affect the appearance and layout.

#### Default Styles for Main Container:
The following styles are applied by default to the main container. If you add a `className`, these styles will be removed:

```css
max-width: 56rem;
height: auto;
margin-left: auto;
margin-right: auto;
background-color: #000000;
border-radius: 0.5rem;
overflow: hidden;
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
position: relative;
```
Ensure to reapply or adjust these styles as needed if you intend to modify the container with custom `className` values.



## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://qbexel.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/md-samiul-alam-khan-a2441b239/)


