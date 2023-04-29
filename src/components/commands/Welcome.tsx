import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
    ___                              ______            _     
   /   | __  ______ _____ _____     /_  __/_  ______  (_)___ 
  / /| |/ / / / __ `/ __ `/ __ \     / / / / / / __ \/ / __ \
 / ___ / /_/ / /_/ / /_/ / / / /    / / / /_/ / / / / / /_/ /
/_/  |_\__, /\__,_/\__,_/_/ /_/    /_/  \__,_/_/ /_/_/\____/ 
      /____/                                                 
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
   ___                    
  / _ |__ _____ ____ ____ 
 / __ / // / _ `/ _ `/ _ \
/_/ |_\_, /\_,_/\_,_/_//_/
 ____/___/       _        
/_  __/_ _____  (_)__     
 / / / // / _ \/ / _ \    
/_/  \_,_/_//_/_/\___/    
                          
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.0.0)</div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;