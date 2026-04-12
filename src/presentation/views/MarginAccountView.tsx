import * as React from 'react';
export interface MarginAccountViewProps { id: string; }
export const MarginAccountView: React.FC<MarginAccountViewProps> = (props) => <div>{props.id}</div>;
