//
//  ExampleMethodQueue.m
#import "ExampleMethodQueueHeader.h"
#import <React/RCTLog.h>

@implementation ExampleMethodQueue

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(exampleMethodQueue:(NSString *)param callback:(RCTResponseSenderBlock)callback)
{
 dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
   // Call long-running code on background thread
   
   // You can invoke callback from any thread/queue
   callback(@[param]);
 });
}

@end
