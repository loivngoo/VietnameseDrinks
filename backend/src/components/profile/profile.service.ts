import { Injectable } from '@nestjs/common';
import { ProfileRepository } from 'src/repositories';

@Injectable()
export class ProfileService {
  constructor(private readonly _repo: ProfileRepository) {}

  async get(id: string) {
    return this._repo.getProfile(id);
  }

  async update(el: any) {
    return this._repo.updateProfile(el);
  }

  async create(el: any) {
    return this._repo.createProfile(el);
  }

  async retrieve() {
    return this._repo.retrieveProfile();
  }
}
