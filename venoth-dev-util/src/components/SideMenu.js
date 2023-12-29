import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import getIconMap from '../utils';
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TagIcon from '@mui/icons-material/Tag';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import PreviewIcon from '@mui/icons-material/Preview';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import HttpsIcon from '@mui/icons-material/Https';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import LanguageIcon from '@mui/icons-material/Language';
import TimerIcon from '@mui/icons-material/Timer';
import WelcomeMessage from './Homepage'

const mapObject = {
    "menu":[
        {
            "title":"Home",
            "icon": <HomeIcon />,
            "component": <WelcomeMessage />
        },
        {
            "title":"CronJob Generator",
            "icon": <ScheduleIcon />,
            "component": <WelcomeMessage />
        },
        {
            "title":"Hash Generator",
            "icon": <TagIcon />,
            "component": <WelcomeMessage />
        },
        {
            "title":"JSON Formatter",
            "icon": <DataObjectIcon />,
            "component": <WelcomeMessage />
        },
        {
            "title":"JSON <==> YAML converter",
            "icon": <DeveloperModeIcon />,
            "component": <WelcomeMessage />
        },
        {
            "title":"MarkDown Previewer",
            "icon": <PreviewIcon />,
            "component": <WelcomeMessage />
        },
        {
            "title":"String Case Converter",
            "icon": <LocalConvenienceStoreIcon />,
            "component": <WelcomeMessage />
        },
        {   
            "title":"Base 64 String Encode / Decode",
            "icon": <EnhancedEncryptionIcon />,
            "component": <WelcomeMessage />
        },
        {
            "title":"URL Encode / Decode",
            "icon": <HttpsIcon />,
            "component": <WelcomeMessage />
        },
        {
            "title":"Unix Timestamp Converter",
            "icon": <SettingsBackupRestoreIcon />,
            "component": <WelcomeMessage />
        },
        {
            "title":"Browser Client Details",
            "icon": <LanguageIcon />,
            "component": <WelcomeMessage />
        },
        {
            "title":"Uptime Calculator",
            "icon": <TimerIcon />,
            "component": <WelcomeMessage />
        }
    ]
}


export default function BasicList() {
    
    if (!mapObject || !mapObject.menu || !Array.isArray(mapObject.menu)) {
        return null;
      }

    return (
      <Box sx={{ width: '100%', maxWidth: 270, bgcolor: '#5963b5' }}>
        <nav aria-label="main mailbox folders">
          <List>
            {mapObject.menu.map((menuItem, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {menuItem.icon}
                  </ListItemIcon>
                  <ListItemText primary={menuItem.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          {/* Additional list items can be added here if needed */}
        </nav>
      </Box>
    );
  }