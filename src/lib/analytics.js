import posthog from "posthog-js";

const initiatePostHog = () =>
  posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, { api_host: "https://app.posthog.com" });

const capturePostHogAnalytics = (analyticsTitle, analyticsProperty, analyticsValue) => {
  const propertyIsMissingOrIncorrectType = !(typeof analyticsTitle === "string" &&
    typeof analyticsProperty == "string" &&
    analyticsValue);

  if (propertyIsMissingOrIncorrectType) {
    throw new Error("Property is missing or is incorrect type.");
  }

  const analyticsObject = {
    [analyticsProperty]: analyticsValue
  };

  return posthog.capture(analyticsTitle, analyticsObject);
};

export {
  initiatePostHog,
  capturePostHogAnalytics
};
