import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Postagem } from '../entities/postagem.entity';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>,
  ) {}

  async findAll(): Promise<Postagem[]> {
    return this.postagemRepository.find();
  }

  async findById(id: number): Promise<Postagem> {
    const postagem = await this.postagemRepository.findOneBy({ id });
    if (!postagem) throw new NotFoundException('Postagem não encontrada');
    return postagem;
  }

  async findByTitulo(titulo: string): Promise<Postagem[]> {
    return this.postagemRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      },
    });
  }

  async create(postagem: Postagem): Promise<Postagem> {
    return this.postagemRepository.save(postagem);
  }

  async update(postagem: Postagem): Promise<Postagem> {
    return this.postagemRepository.save(postagem);
  }

  async delete(id: number): Promise<void> {
    const postagem = await this.findById(id);
    if (!postagem) throw new NotFoundException('Postagem não encontrada');
    await this.postagemRepository.delete(id);
  }
}
