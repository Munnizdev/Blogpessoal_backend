import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { Postagem } from '../entities/postagem.entity';
import { PostagemService } from '../services/postagem.service';

@ApiTags('Postagem')
@UseGuards(JwtAuthGuard)
@Controller('/postagens')
@ApiBearerAuth()
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Listar todas as postagens' })
  @ApiResponse({ status: 200, description: 'Postagens listadas com sucesso.' })
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Buscar postagem por ID' })
  findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
    return this.postagemService.findById(id);
  }

  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Buscar postagens pelo título' })
  findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
    return this.postagemService.findByTitulo(titulo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Criar uma nova postagem' })
  create(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.create(postagem);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Atualizar uma postagem existente' })
  update(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.update(postagem);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar uma postagem' })
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.postagemService.delete(id);
  }
}
