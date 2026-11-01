import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2024',
    title: 'ISFT',
    subtitle: 'Economics',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: 'Feb 2026',
    title: 'LexiLift',
    subtitle: 'Founder & CEO',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: 'Apr 2026',
    title: 'ShamCRM',
    subtitle: 'Sales',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2026',
    title: 'Afnan',
    subtitle: 'IT & CRM Lead',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: 'Now',
    title: 'Building...',
    subtitle: 'one product at a time',
    position: 'right',
  }
]
