// typings/toutiao.d.ts
declare namespace tt {
    interface RequestOption {
      url: string;
      data?: string | any;
      header?: any;
      method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
      dataType?: string;
      responseType?: string;
      success?: (res: RequestSuccessCallbackResult) => void;
      fail?: (res: GeneralCallbackResult) => void;
      complete?: (res: GeneralCallbackResult) => void;
    }
  
    interface RequestSuccessCallbackResult<T = any> {
      data: T;
      statusCode: number;
      headers: any;
      cookies: string[];
    }
  
    interface GeneralCallbackResult {
      errMsg: string;
    }
  
    function request(options: RequestOption): void;
    function navigateTo(options: { url: string }): void;
  }
  