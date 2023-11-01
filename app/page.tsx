"use server"

import { DeviceWizard } from '@/components/DeviceWizard/DeviceWizard';
import config from '@/src/config';
import { Box } from '@mui/joy';

export default async function Home() {
  return <Box>
    <DeviceWizard />
  </Box>
}
