import { Announcement } from "../entity/Announcement";

export interface AnnouncementRepository {
  create(announcement: Announcement): Promise<string>;
  get(id: string): Promise<Announcement>;
  save(announcement: Announcement): Promise<void>
  destroy(announcement: Announcement): Promise<void>
}
