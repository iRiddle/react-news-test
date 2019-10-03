import vkIcon from "static/icons/vk.svg";
import telegramIcon from "static/icons/telegram.svg";
import webIcon from "static/icons/domain.svg";
import youtubeIcon from "static/icons/youtube.svg";
import twitterIcon from "static/icons/twitter.svg";
import twitchIcon from "static/icons/twitch.svg";

export const validateEmail = email => {
  var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
};

export const getIcon = label => {
  switch (label) {
    case "vk":
      return vkIcon;
    case "telegram":
      return telegramIcon;
    case "web":
      return webIcon;
    case "youtube":
      return youtubeIcon;
    case "twitter":
      return twitterIcon;
    case "twitch":
      return twitchIcon;
  }
};
