/**
 * Composable to handle browser cookies.
 *
 * @return cookie functions
 */
export const useCookies = () => {
  const getCookies = (): Record<string, string> => {
    return document.cookie.split("; ").reduce((result, current) => {
      const [key, value] = current.split("=");
      return { ...result, [key]: value };
    }, {});
  };

  const getCookie = (name: string): string | undefined => {
    return getCookies()[name];
  };

  const setCookie = (
    name: string,
    value: string,
    {
      expires = 0,
      sameSite = "Lax",
      path = "/",
      secure = true,
    }: {
      expires?: number;
      sameSite?: "Lax" | "None";
      path?: string;
      secure?: boolean;
    }
  ): void => {
    let cookieString = `${name}=${value}; Path=${path}; SameSite=${sameSite} ${
      secure ? "; Secure" : ""
    }`;
    if (expires > 0) {
      const date = new Date();
      date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
      cookieString = `${cookieString}; Expires=${date.toUTCString()}`;
    }
    document.cookie = cookieString;
  };

  return { getCookie, setCookie };
};
