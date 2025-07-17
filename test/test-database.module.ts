// test/test-database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:', // Banco em memória
      entities: [path.join(__dirname, '../src/**/*.entity{.ts,.js}')], // Caminho absoluto
      synchronize: true, // Cria schema automaticamente
      dropSchema: true, // Limpa o banco entre testes
      logging: false, // Opcional: desativa logs SQL
    }),
  ],
  exports: [TypeOrmModule], // Exporta para outros módulos de teste
})
export class TestDatabaseModule {}
