import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ScenesService } from './scenes.service';
import { CreateSceneDto } from './dto/create-scene.dto';
import { UpdateSceneDto } from './dto/update-scene.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('scenes')
@ApiTags('场景')
export class ScenesController {
  constructor(private readonly scenesService: ScenesService) {}

  @Post()
  @ApiOperation({ summary: '创建场景' })
  create(@Body() createSceneDto: CreateSceneDto) {
    return this.scenesService.create(createSceneDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有场景' })
  findAll() {
    return this.scenesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取场景' })
  findOne(@Param('id') id: string) {
    return this.scenesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新场景' })
  update(@Param('id') id: string, @Body() updateSceneDto: UpdateSceneDto) {
    return this.scenesService.update(id, updateSceneDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除场景' })
  remove(@Param('id') id: string) {
    return this.scenesService.remove(id);
  }
}
