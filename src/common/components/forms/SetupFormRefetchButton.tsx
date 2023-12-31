import * as React from 'react';

import { Box, Button, FormLabel } from '@mui/joy';
import SyncIcon from '@mui/icons-material/Sync';

import type { ToggleableBoolean } from '~/common/util/useToggleableBoolean';


/**
 * Bottom row: model reload and optional 'advanced' toggle
 */
export function SetupFormRefetchButton(props: { refetch: () => void, disabled: boolean, error: boolean, advanced?: ToggleableBoolean }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between' }}>

      {!!props.advanced && (
        <FormLabel onClick={props.advanced.toggle} sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
          {props.advanced.on ? 'Hide Advanced' : 'Advanced'}
        </FormLabel>
      )}

      <Button
        variant='solid' color={props.error ? 'warning' : 'primary'}
        disabled={props.disabled}
        endDecorator={<SyncIcon />}
        onClick={props.refetch}
        sx={{ minWidth: 120, ml: 'auto' }}
      >
        Models
      </Button>

    </Box>
  );
}