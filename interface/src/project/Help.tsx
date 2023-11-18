import { Tab } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import HelpInformation from './HelpInformation';
import type { FC } from 'react';

import { RouterTabs, useRouterTab, useLayoutTitle } from 'components';

import { useI18nContext } from 'i18n/i18n-react';

const Help: FC = () => {
  const { LL } = useI18nContext();
  const { routerTab } = useRouterTab();

  useLayoutTitle(LL.HELP_OF(''));

  return (
    <>
      <RouterTabs value={routerTab}>
        <Tab value="information" label={LL.HELP_OF('EMS-ESP')} />
      </RouterTabs>
      <Routes>
        <Route path="information" element={<HelpInformation />} />
        <Route path="/*" element={<Navigate replace to="information" />} />
      </Routes>
    </>
  );
};

export default Help;