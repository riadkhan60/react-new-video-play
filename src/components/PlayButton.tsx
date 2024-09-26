import styled from 'styled-components';

interface StyledPlayButtonProps {
  $color?: string;
  $backgroundcolor?: string;
  $hovercolor?: string;
  $hoverbackgroundcolor?: string;
}

const StyledPlayButton = styled.button<StyledPlayButtonProps>`
  color: ${(props) => props.$color || 'white'};
  background-color: ${(props) => props.$backgroundcolor || 'black'};
  border-radius: 9999px;
  padding: 2rem;
  transition: all 500ms ease-in-out;

  &:hover {
    color: ${(props) => props.$hovercolor || '#ffffff'};
    background-color: ${(props) => props.$hoverbackgroundcolor || 'black'};
    transform: scale(1.1);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 440px) {
    padding: 1rem;
  }
`;

interface PlayButtonProps {
  togglePlay: () => void;
  children?: React.ReactNode;
  color?: string;
  backgroundcolor?: string;
  hovercolor?: string;
  hoverbackgroundcolor?: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({
  togglePlay,
  children,
  color,
  backgroundcolor,
  hovercolor,
  hoverbackgroundcolor,
}) => {
  return (
    <StyledPlayButton
      onClick={togglePlay}
      $color={color}
      $backgroundcolor={backgroundcolor}
      $hovercolor={hovercolor}
      $hoverbackgroundcolor={hoverbackgroundcolor}
    >
      {children}
    </StyledPlayButton>
  );
};

export default PlayButton;
