/*
 * @Author: ai.zhang
 * @Date: 2023-01-05 19:09:19
 * @LastEditors: ai.zhang
 * @Description:
 */
import type { AxiosRequestConfig } from "axios";

export interface HttpRequestParams {
  method: string;
  url: string;
  params?: any;
  config?: AxiosRequestConfig<{}>;
}

export interface FeedsDataCallBack {
  batch_id?: any;
  has_more?: any;
  items: FeedsDataItem[];
  offset?: any;
  total_count?: any;
}

export interface FeedsDataItem {
  status: any;
  id: any;
  score_human: number;
  feed: FeedParams;
  relation: {
    follow_status: number;
    thumb_up: number;
  };
}

export interface FeedParams {
  score_human: any;
  status: number;
  asset_cover: string;
  asset_size: {
    width: number;
    height: number;
  };
  asset_type: number;
  asset_uri: string;
  comment_count: number;
  content: string;
  create_time: number;
  creator: CreatorParams;
  deleted: number;
  id: string;
  like_count: number;
  nft: [];
  score: number;
}

export interface CreatorParams {
  quality_user: number;
  quanlity_user: number;
  deleted: number;
  id: string;
  profile_img_url: string;
  user_name: string;
}

export interface BannerCallBack {
  banners: BannerItem[];
}

export interface BannerItem {
  id: string;
  resource: string;
  jump: {
    jump_type: number;
    destination: string;
    content?: string;
  };
}
