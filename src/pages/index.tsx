/**
 * This file is part of the nextjs-app-starter package.
 *
 * (c) Ondřej Záruba <info@zaruba-ondrej.cz>
 *
 * For the full copyright and license information, please view the license.md
 * file that was distributed with this source code.
 */

import * as React from 'react';
import {FunctionComponent} from 'react';
import HelloWorld from '../components/HelloWorld';

const index: FunctionComponent<{}> = () => {
    return <HelloWorld/>
};

export default index;