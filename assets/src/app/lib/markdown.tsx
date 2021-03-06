import * as React from 'react';
import { MDXProvider } from '@mdx-js/react'
import { TextContent } from '@patternfly/react-core';

const pfTable = (props) => <table className="pf-c-table" {...props} />

const pfMapping = {
    table: pfTable,
}

const Markdown: React.FunctionComponent<any> = (props) => {
    return (
        <MDXProvider components={pfMapping}>
            <TextContent>
                {props.children}
            </TextContent>
        </MDXProvider>
    )
}

export { Markdown };
