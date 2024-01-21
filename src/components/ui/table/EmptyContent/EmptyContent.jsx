var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Typography, Stack } from '@mui/material';
import * as React from 'react';
import { Image } from 'components/ui/Image';
function EmptyContent(_a) {
    var { title, description, img, sx } = _a, other = __rest(_a, ["title", "description", "img", "sx"]);
    return (<Stack alignItems="center" justifyContent="center" sx={Object.assign({ height: 1, textAlign: 'center', p: (theme) => theme.spacing(8, 2) }, sx)} {...other}>
      <Image disabledEffect alt="empty content" src={img || '/static/assets/illustrations/illustration_empty_content.svg'} sx={{ height: 240, mb: 3 }}/>

      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      {description && (<Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>)}
    </Stack>);
}
export default React.memo(EmptyContent);
