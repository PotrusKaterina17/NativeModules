//  SyncExample.m

#import <Foundation/Foundation.h>
#import "SyncExampleHeader.h"
#import <UIKit/UIKit.h>

@implementation SyncExample

RCT_EXPORT_MODULE()

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(syncExampleMethod)
{
return [[UIDevice currentDevice] name];
}

@end
