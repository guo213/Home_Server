import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DashboardsService } from './dashboards.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('dashboards')
@ApiTags('仪表板')
export class DashboardsController {
  constructor(private readonly dashboardsService: DashboardsService) {}

  @Post()
  @ApiOperation({ summary: '创建仪表板' })
  create(@Body() createDashboardDto: CreateDashboardDto) {
    return this.dashboardsService.create(createDashboardDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有仪表板' })
  findAll() {
    return this.dashboardsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取仪表板' })
  findOne(@Param('id') id: string) {
    return this.dashboardsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新仪表板' })
  update(
    @Param('id') id: string,
    @Body() updateDashboardDto: UpdateDashboardDto,
  ) {
    return this.dashboardsService.update(id, updateDashboardDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除仪表板' })
  remove(@Param('id') id: string) {
    return this.dashboardsService.remove(id);
  }
}
