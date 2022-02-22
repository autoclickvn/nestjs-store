import { Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class AddressDetail extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  detail: string;
}

export class AddressSchema extends Document {
  @Prop({ required: true })
  province: AddressDetail;

  @Prop({ required: true })
  district: AddressDetail;

  @Prop({ required: true })
  village: AddressDetail;

  @Prop({ required: true })
  provinceId: number;

  @Prop({ required: true })
  districtId: number;

  @Prop({ required: true })
  villageId: number;

  @Prop({ required: true })
  detail: string;
}
