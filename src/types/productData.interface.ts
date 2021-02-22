interface config {
    connectorURL: string;
};

export interface productTemplate {
    id: string;
    name: string;
    bin: string;
    cardNetwork: string;
    config: config;
    description: string;
    version: string;
    authPlans: string[];
}