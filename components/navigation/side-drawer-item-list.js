import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

const SideDrawerItemList = ({itemList}) => {
    return <List>
        {Object.entries(itemList).map(([key, item]) => (
            <ListItem key={key} disablePadding>
                <Link href={item.route}>
                    <ListItemButton selected={item.selected}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                </Link>
            </ListItem>
        ))}
    </List>
}

export default SideDrawerItemList;