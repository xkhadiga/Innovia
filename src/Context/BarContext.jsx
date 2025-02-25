import { createContext } from "react";
import { useState, useEffect } from "react";

export const BarContext = createContext();
export const BarProvider = ( {children} ) => {
     // handle settings toggler
  const [settingsToggle, setSettingsToggle] = useState(false);
  const handle_settings = () => {
    setSettingsToggle(true);
  };

//  handle avatar
  const [savedImage, setSavedImage] = useState(null);  
  useEffect(() => {
    const avatar = localStorage.getItem("avatar");
    if (avatar !== null) {
      setSavedImage(avatar);
    }
    else {
      setSavedImage(null);
    }
  }, []);

    // handle avatar
    const [avatar, setAvatar] = useState(false);
    const handle_avatar = () => {
      setAvatar(true);
    };

      // uploading profile avatar (react-avatar-edit)
      const [preview, setPreview] = useState(null);
      const [msrc, setMsrc] = useState(null);
      const onClose = () => {
        setPreview(null);
      };
      const onCrop = (preview) => {
        setPreview(preview);
      };
      // saving avatar & delete
      const handle_save = () => {
        if (preview !== null) {
          setSavedImage(preview);
          localStorage.setItem("avatar", preview);
          setAvatar(false);
        } else {
          setSavedImage(null);
          localStorage.removeItem("avatar");
          setAvatar(false);
        }
      };
      const handle_delete_avatar = () => {
        setPreview(null);
        setSavedImage(null);
        localStorage.removeItem("avatar");
      };
return (
    <BarContext.Provider value={ {settingsToggle,setSettingsToggle , handle_settings, savedImage,setSavedImage, avatar, setAvatar, handle_avatar,preview, setPreview,msrc, setMsrc, onClose,onCrop,handle_save,handle_delete_avatar }}>
        {children}
    </BarContext.Provider>
)
}