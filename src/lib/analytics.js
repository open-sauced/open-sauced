import posthog from "posthog-js";

function initiatePostHog () {
    posthog.init(process.env.POSTHOG_ID, { api_host: 'https://app.posthog.com' });
    return;
}

function capturePostHogAnayltics ( analyticsTitle, analyticsProperty, analyticsValue) {
    const propertyIsMissingOrIncorrectType = !(typeof analyticsTitle === "string" &&
                                               typeof analyticsProperty == "string" &&
                                               analyticsValue);
    if(propertyIsMissingOrIncorrectType) throw new Error("Property is missing or is incorrect type.");

    const analyticsObject = {};
    analyticsObject[analyticsProperty] = analyticsValue;

    posthog.capture(analyticsTitle, analyticsObject);

    return;
}

export {
    initiatePostHog,
    capturePostHogAnayltics
};