import axios, { AxiosInstance } from 'axios';
import { getToken } from '@lib/utils';
import { InterceptorCallbackType } from './type';
import { LoginType, SignupType } from '@lib/types/user';

import { BarType } from '@lib/types';

/**
 * REST API 관련 클래스
 */
export class Network {
  private _instance: AxiosInstance;
  private _token: string | null;

  constructor(baseURL: string | undefined) {
    this._token = getToken();

    this._instance = axios.create({
      baseURL,
      headers: {
        'x-auth-token': this._token,
      },
    });
  }

  /**
   * 유저 관련 API
   */
  user = {
    login: async ({ email, password }: LoginType) => {
      return this._instance.post(
        '/auth/login',
        { email, password },
        {
          headers: { 'X-Requested-With': 'JSONLoginHttpRequest' },
        }
      );
    },
    logout: async () => {
      return this._instance.post('/auth/logout');
    },
    join: async ({ email, password, phoneNumber, name, nickname }: SignupType) => {
      return this._instance.post('/auth/register', { email, password, phone: phoneNumber, name, nickname });

    },
  };

  bar = {
    getBarList: async ({ latitude, longitude, zoomLevel = 6, moodTag = '', drinkTag = '' }: BarType.barSearchTyoe) => {
      return this._instance.get(
        `/api/bars?latitude=${latitude}&longitude=${longitude}&level=${zoomLevel}&barMoodTagNames=${moodTag}&barAlcoholTagNames=${drinkTag}`
      );
    },
  };
  /**
   * axios 인터셉터
   */
  private _interceptor({ reqCallback, resCallback, reqErrorCallback, resErrorCallback }: InterceptorCallbackType) {
    {
      this._instance.interceptors.request.use(
        function (config) {
          // 요청이 전달되기 전에 작업 수행
          reqCallback && reqCallback(config);
          return config;
        },
        function (error) {
          // 요청 오류가 있는 작업 수행
          reqErrorCallback && reqErrorCallback(error);
          return Promise.reject(error);
        }
      );

      // 응답 인터셉터 추가하기
      this._instance.interceptors.response.use(
        function (response) {
          // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
          // 응답 데이터가 있는 작업 수행
          resCallback && resCallback(response);
          return response;
        },
        function (error) {
          // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
          // 응답 오류가 있는 작업 수행
          resErrorCallback && resErrorCallback(error);
          return Promise.reject(error);
        }
      );
      return this._instance;
    }
  }
  get instance() {
    return this._instance;
  }
}
/**
 * REST API 인스턴스
 */
const APIS = new Network(process.env.NEXT_PUBLIC_API_BASE_URL);

export default APIS;