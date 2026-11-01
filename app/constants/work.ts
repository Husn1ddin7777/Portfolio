import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2024',
    title: 'ISFT',
    subtitle: 'Iqtisodiyot',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-3, -3, -2.5),
    year: 'Yan 2026',
    title: 'Octane',
    subtitle: 'Savdo agenti, AQSh bozori',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-4, -3, -5),
    year: 'Fev 2026',
    title: 'LexiLift',
    subtitle: 'Asoschi va CEO',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-2, -1, -7.5),
    year: 'Apr 2026',
    title: 'ShamCRM',
    subtitle: 'Savdo',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2026',
    title: 'Afnan',
    subtitle: 'IT va CRM rahbari',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: 'Hozir',
    title: 'Quryapman...',
    subtitle: 'har safar bitta mahsulot',
    position: 'right',
  }
]
