import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { styles } from './edit_dialog_field_styles';

const useStyles = createUseStyles(styles);

const EditDialogFieldComponent = ({ title, subtitle, children, error, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    return (
        <div className={cn(classes.container, receivedClasses.container)}>
            {title && (
                <Typography customClasses={{ container: classes.title }} component="h3" variant="h4" color="dark">
                    {title}
                </Typography>
            )}
            {subtitle && (
                <Typography customClasses={{ container: classes.subtitle }} component="p" variant="body2" color="dark">
                    {subtitle}
                </Typography>
            )}
            <div className={cn(classes.componentErrorContainer, receivedClasses.componentErrorContainer)}>
                <div className={cn(classes.component, receivedClasses.component)}>{children}</div>
                {error && (
                    <Typography color="danger" variant="helper" component="p">
                        {error}
                    </Typography>
                )}
            </div>
        </div>
    );
};

export const EditDialogField = EditDialogFieldComponent;
