import React from 'react';
import { Button, Text, SiteInfoInnerPane, TableList, TableListRow } from '@getflywheel/local-components';

interface IProps {
	lastUpdated: string,
	totalDeductions: string,
	totalFileSizeDeductions: string,
	totalImageOptimized: string,
}

const LastOptimizeStatus: React.FC<IProps> = (props: IProps) => (
	<TableList className="lastOptimizeStatus_Table">
		<TableListRow className="lastOptimizeStatus_Row">
			<Text className="lastOptimizeStatus_Text"> {'Last updated '} {props.lastUpdated}</Text>
			<Button className="lastOptimizeStatus_Button">Settings</Button>
		</TableListRow>
		<TableListRow className="lastOptimizeStatus_Row">
			<Text className="lastOptimizeStatus_Text">Total reductions</Text>
			<Text className="lastOptimizeStatus_Text">{props.totalDeductions}</Text>
		</TableListRow>
		<TableListRow className="lastOptimizeStatus_Row">
			<Text className="lastOptimizeStatus_Text">Total file size reductions</Text>
			<Text className="lastOptimizeStatus_Text">{props.totalFileSizeDeductions}</Text>
		</TableListRow>
		<TableListRow className="lastOptimizeStatus_Row">
			<Text className="lastOptimizeStatus_Text">Total images optimized</Text>
			<Text className="lastOptimizeStatus_Text">{props.totalImageOptimized}</Text>
		</TableListRow>
	</TableList>
);

export default LastOptimizeStatus;
