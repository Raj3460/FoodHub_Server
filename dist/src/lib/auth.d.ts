export declare const auth: import("better-auth").Auth<{
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").DBAdapter<import("better-auth").BetterAuthOptions>;
    baseURL: {
        protocol: "auto";
        allowedHosts: string[];
        fallback: string;
    };
    trustedOrigins: string[];
    advanced: {
        trustedProxyHeaders: true;
        defaultCookieAttributes: {
            sameSite: "lax";
            secure: boolean;
            httpOnly: true;
        };
    };
    user: {
        additionalFields: {
            role: {
                type: "string";
                defaultValue: string;
            };
            phone: {
                type: "string";
            };
            status: {
                type: "string";
                defaultValue: string;
            };
        };
    };
    emailAndPassword: {
        enabled: true;
        autoSignIn: false;
        requireEmailVerification: true;
    };
    emailVerification: {
        sendOnSignUp: true;
        autoSignInAfterVerification: true;
        sendVerificationEmail: ({ user, token }: {
            user: import("better-auth").User;
            url: string;
            token: string;
        }) => Promise<void>;
    };
    socialProviders: {
        google: {
            clientId: string;
            clientSecret: string;
        };
    };
}>;
