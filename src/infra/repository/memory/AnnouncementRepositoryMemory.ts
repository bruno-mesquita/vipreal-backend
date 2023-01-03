import { v4 } from 'uuid';

import { Announcement } from "../../../domain/entity/Announcement";
import type { AnnouncementRepository } from "../../../domain/repository/AnnouncementRepository";


export class AnnouncementRepositoryMemory implements AnnouncementRepository {
  private announcements: Announcement[] = []

  async create(announcement: Announcement): Promise<string> {
    announcement.id = v4();
    this.announcements.push(announcement);
    return announcement.id;
  }
  async get(id: string): Promise<Announcement> {
    const item = this.announcements.find(_item => _item.id === id);
    if(!item) throw new Error('Anuncio não encontrado');
    return item;
  }
  save(announcement: Announcement): Promise<void> {
    throw new Error("Method not implemented.");
  }
  destroy(announcement: Announcement): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
