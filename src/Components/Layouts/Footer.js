import React from "react";
import { Paper, Tabs } from '@material-ui/core'
import Tab from '@material-ui/core/Tab'

export default function Footer({ muscles }) {
  return (
    <Paper>
      <Tabs
        value={0}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="all" />
        {muscles.map((group , i) =>
          <Tab key={i} label={group} />
        )}
      </Tabs>
    </Paper>
  )
}

