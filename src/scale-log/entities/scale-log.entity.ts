// src/scale-log/scale-log.entity.ts
export class ScaleLog {
  id?: number;
  department: string;
  logDate: string;
  verifiedBy?: string;
  verifiedDate?: string;
  comments?: string;
  entries: {
    scaleNo: string;
    time: string;
    reading: 'A' | 'IA';
    smart?: boolean;
    cs?: boolean;
    baggerA?: boolean;
    baggerB?: boolean;
    iqf?: boolean;
    operatorInitials: string;
    qcInitials: string;
  }[];
}