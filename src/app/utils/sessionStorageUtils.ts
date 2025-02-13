export const clientDecodeBase64Json = <T>(
  storedData: string | null
): T | undefined => {
  if (!storedData) return undefined;

  try {
    const decodeData = JSON.parse(decodeURIComponent(atob(storedData))) as T;
    return decodeData;
  } catch (err) {
    console.error("eventNameのデコードに失敗", err);
    return undefined;
  }
};

export const clientEncodeBase64Json = <T>(
  data: T | undefined
): string | undefined => {
  try {
    return btoa(encodeURIComponent(JSON.stringify(data)));
  } catch (err) {
    console.error("エンコードの失敗", err);
    return undefined;
  }
};

export const serverDecodeBase64Json = <T>(
  storedData: string | null
): T | undefined => {
  if (!storedData) return undefined;

  try {
    const decodeData = JSON.parse(
      decodeURIComponent(Buffer.from(storedData, "base64").toString())
    ) as T;
    return decodeData;
  } catch (err) {
    console.error("eventNameのデコードに失敗", err);
    return undefined;
  }
};

export const serverEncodeBase64Json = <T>(
  data: T | undefined
): string | undefined => {
  try {
    return btoa(encodeURIComponent(JSON.stringify(data)));
  } catch (err) {
    console.error("エンコードの失敗", err);
    return undefined;
  }
};
