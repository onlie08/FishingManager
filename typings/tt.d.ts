declare namespace ta {
    interface GetLocationSuccessCallbackResult {
        latitude: number;
        longitude: number;
        speed: number;
        accuracy: number;
    }

    interface GetLocationOptions {
        type?: 'wgs84' | 'gcj02';
        success?: (res: GetLocationSuccessCallbackResult) => void;
        fail?: (error: any) => void;
        complete?: () => void;
    }

    function getLocation(options: GetLocationOptions): void;
}
