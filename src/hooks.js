import { useState, useEffect } from "react";

export function useThemeState(initialTheme) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    //   function handleStatusChange(status) {
    //     setIsOnline(status.isOnline);
    //   }
    //   ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    //   return () => {
    //     ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    //   };
  });

  return [theme, setTheme];
}
