// cropImage.ts

/**
 * Crop the provided image source based on the crop data and return a Promise
 * that resolves with the cropped image as a base64-encoded data URL.
 * @param imageSrc - The source URL or base64 data of the image to crop.
 * @param crop - The crop object containing x, y, width, and height of the crop area.
 * @returns A Promise that resolves with the cropped image as a base64-encoded data URL.
 */
export async function getCroppedImg(imageSrc: string, crop: { x: number, y: number, width: number, height: number }): Promise<string | null> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Failed to get 2D context'));
          return;
        }
  
        // Set canvas dimensions to match cropped area
        canvas.width = crop.width;
        canvas.height = crop.height;
  
        // Perform cropping based on the crop data
        ctx.drawImage(
          image,
          crop.x,
          crop.y,
          crop.width,
          crop.height,
          0,
          0,
          crop.width,
          crop.height
        );
  
        // Get the cropped image as a base64-encoded data URL
        const croppedImageUrl = canvas.toDataURL('image/png');
        resolve(croppedImageUrl);
      };
  
      // Set the image source to start loading
      image.src = imageSrc;
    });
  }
  