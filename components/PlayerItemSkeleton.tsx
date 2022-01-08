import { FunctionComponent } from "react";

export interface PlayerItemSkeletonProps {}

const PlayerItemSkeleton: FunctionComponent<PlayerItemSkeletonProps> = () => {
	return (
		<div className="animate-pulse flex flex-col relative cursor-pointer transition-colors duration-200 hover:bg-gray-600 bg-gray-700 w-full sm:w-[400px] rounded-md shadow-lg p-4 justify-start border-2 border-gray-600">
			<div className="rounded-full bg-gray-900 border-2 border-gray-600 w-[64px] h-[64px]" />
		</div>
	);
};

export default PlayerItemSkeleton;
