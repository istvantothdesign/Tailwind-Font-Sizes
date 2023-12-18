async function createTailwindTypeScale() {
  // Creating Tailwind type scale system
  const tailwindSizes = [128, 96, 72, 60, 48, 36, 30, 24, 20, 18, 16, 14, 12];

  // Creating auto-layout to hold all the elements
  const parentFrame = figma.createFrame();
  parentFrame.layoutMode = "VERTICAL";
  parentFrame.layoutSizingVertical = "HUG";
  parentFrame.layoutSizingHorizontal = "HUG";
  parentFrame.paddingTop = 100;
  parentFrame.paddingBottom = 100;
  parentFrame.paddingLeft = 100;
  parentFrame.paddingRight = 100;
  parentFrame.name = "Tailwind Font Sizes";
  parentFrame.itemSpacing = 60;

  // Generating text
  for (
    let i = 0, position = 200;
    i < tailwindSizes.length;
    i++, position += 150
  ) {
    const text = figma.createText();
    const sentence = figma.createText();
    const sentenceCharacters = "The quick brown fox jumps over the lazy dog.";

    // Move to (50, 50)
    text.x = 50;
    text.y = tailwindSizes[i % 13] * -8;

    // Load the font in the text node before setting the characters
    if (text.type === "TEXT") {
      await figma.loadFontAsync(text.fontName as FontName);
      const textStyle = figma.createTextStyle();
      const stylePath = "Tailwind fonts";

      // Looking for text styles
      const textStyles = figma.getLocalTextStyles();

      // Creating auto layout for each font to hold font name and sentence
      const fontFrame = figma.createFrame();
      fontFrame.layoutMode = "VERTICAL";
      fontFrame.layoutSizingVertical = "HUG";
      fontFrame.layoutSizingHorizontal = "HUG";
      fontFrame.itemSpacing = 10;
      fontFrame.name = "Font wrapper";
      sentence.characters = sentenceCharacters;

      switch (i) {
        case 0:
          text.characters = "text-9xl";
          textStyle.name = `${stylePath}/text-9xl`;
          textStyle.fontSize = tailwindSizes[i];
          break;
        case 1:
          text.characters = "text-8xl";
          textStyle.name = `${stylePath}/text-8xl`;
          textStyle.fontSize = tailwindSizes[i];
          break;
        case 2:
          text.characters = "text-7xl";
          textStyle.name = `${stylePath}/text-7xl`;
          textStyle.fontSize = tailwindSizes[i];
          break;
        case 3:
          text.characters = "text-6xl";
          textStyle.name = `${stylePath}/text-6xl`;
          textStyle.fontSize = tailwindSizes[i];
          break;
        case 4:
          text.characters = "text-5xl";
          textStyle.name = `${stylePath}/text-5xl`;
          textStyle.fontSize = tailwindSizes[i];
          break;
        case 5:
          text.characters = "text-4xl";
          textStyle.name = `${stylePath}/text-4xl`;
          textStyle.fontSize = tailwindSizes[i];
          break;
        case 6:
          text.characters = "text-3xl";
          textStyle.name = `${stylePath}/text-3xl`;
          textStyle.fontSize = tailwindSizes[i];
          break;
        case 7:
          text.characters = "text-2xl";
          textStyle.name = `${stylePath}/text-2xl`;
          textStyle.fontSize = tailwindSizes[i];
          break;
        case 8:
          text.characters = "text-xl";
          textStyle.name = `${stylePath}/text-xl`;
          textStyle.fontSize = tailwindSizes[i];
          break;
        case 9:
          text.characters = "text-lg";
          textStyle.name = `${stylePath}/text-lg`;
          textStyle.fontSize = tailwindSizes[i];
          break;
        case 10:
          text.characters = "text-base";
          textStyle.name = `${stylePath}/text-base`;
          textStyle.fontSize = tailwindSizes[i];
          break;
        case 11:
          text.characters = "text-sm";
          textStyle.name = `${stylePath}/text-sm`;
          textStyle.fontSize = tailwindSizes[i];
          break;
        case 12:
          text.characters = "text-xs";
          textStyle.name = `${stylePath}/text-xs`;
          textStyle.fontSize = tailwindSizes[i];
          break;
        default:
          // Create a new style for other cases
          text.characters = `text-${i}xl`;
          textStyle.name = `${stylePath}/text-${i}xl`;
          textStyle.fontSize = tailwindSizes[i];
          break;
      }

      // Set bigger font size and red color
      text.fontSize = 16;

      // Apply the new style to the text node
      text.textStyleId = textStyle.id;
      sentence.textStyleId = textStyle.id;

      text.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];

      fontFrame.appendChild(text);
      fontFrame.appendChild(sentence);
      parentFrame.appendChild(fontFrame);
    }
  }

  // Add the parentFrame to the page
  figma.currentPage.appendChild(parentFrame);

  // Center the parentFrame in the viewport
  const viewportCenter = figma.viewport.center;
  const xOffset = viewportCenter.x - parentFrame.width / 2;
  const yOffset = viewportCenter.y - parentFrame.height / 2;
  parentFrame.x = xOffset;
  parentFrame.y = yOffset;

  figma.closePlugin();
}

createTailwindTypeScale();
