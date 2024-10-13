export const loadImage = (imagePath) => {
    const placeholderImage = 'https://placehold.co/600x400';

    try {
        return require(imagePath);
    } catch {
        return placeholderImage;
    }
};
