"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_exampleItems_1 = require("./mock-exampleItems");
var ExampleItemService = (function () {
    function ExampleItemService() {
    }
    ExampleItemService.prototype.getAllExampleItems = function () {
        return mock_exampleItems_1.EXAMPLEITEMS;
    };
    ExampleItemService.prototype.getParentExampleItem = function (index) {
        return mock_exampleItems_1.EXAMPLEITEMS[index];
    };
    ExampleItemService.prototype.getChildExampleItem = function (parentTitle, subItemTitle, exampleItems) {
        if (exampleItems) {
            for (var index_1 = 0; index_1 < exampleItems.length; index_1++) {
                var element = exampleItems[index_1];
                if (element.title === parentTitle) {
                    var parentExampleItem = element;
                    if (parentExampleItem && parentExampleItem.subItems.length >= 0) {
                        var childItem = parentExampleItem.subItems.filter(function (item) { return item.title === subItemTitle; })[0];
                        return childItem;
                    }
                }
                else {
                    if (element.subItems.length >= 0) {
                        var result = this.getChildExampleItem(parentTitle, subItemTitle, element.subItems);
                        if (result) {
                            return result;
                        }
                    }
                }
            }
        }
        return null;
    };
    ExampleItemService = __decorate([
        core_1.Injectable()
    ], ExampleItemService);
    return ExampleItemService;
}());
exports.ExampleItemService = ExampleItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZUl0ZW1TZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGFtcGxlSXRlbVNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx5REFBbUQ7QUFJbkQ7SUFBQTtJQWlDQSxDQUFDO0lBaENHLCtDQUFrQixHQUFsQjtRQUNJLE9BQU8sZ0NBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQsaURBQW9CLEdBQXBCLFVBQXFCLEtBQWE7UUFDOUIsT0FBTyxnQ0FBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnREFBbUIsR0FBbkIsVUFBb0IsV0FBbUIsRUFBRSxZQUFvQixFQUFFLFlBQVk7UUFDdkUsSUFBSSxZQUFZLEVBQUU7WUFDZCxLQUFLLElBQUksT0FBSyxHQUFHLENBQUMsRUFBRSxPQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFLLEVBQUUsRUFBRTtnQkFDdEQsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQUssQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO29CQUMvQixJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztvQkFDbEMsSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDN0QsSUFBTSxTQUFTLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEtBQUssWUFBWSxFQUEzQixDQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRTVGLE9BQU8sU0FBUyxDQUFDO3FCQUNwQjtpQkFDSjtxQkFDSTtvQkFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDOUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNyRixJQUFJLE1BQU0sRUFBRTs0QkFDUixPQUFPLE1BQU0sQ0FBQzt5QkFDakI7cUJBQ0o7aUJBQ0o7YUFDSjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQWhDUSxrQkFBa0I7UUFEOUIsaUJBQVUsRUFBRTtPQUNBLGtCQUFrQixDQWlDOUI7SUFBRCx5QkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVYQU1QTEVJVEVNUyB9IGZyb20gXCIuL21vY2stZXhhbXBsZUl0ZW1zXCI7XG5pbXBvcnQgeyBFeGFtcGxlSXRlbSB9IGZyb20gXCIuL2V4YW1wbGVJdGVtXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeGFtcGxlSXRlbVNlcnZpY2Uge1xuICAgIGdldEFsbEV4YW1wbGVJdGVtcygpOiBFeGFtcGxlSXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIEVYQU1QTEVJVEVNUztcbiAgICB9XG5cbiAgICBnZXRQYXJlbnRFeGFtcGxlSXRlbShpbmRleDogbnVtYmVyKTogRXhhbXBsZUl0ZW0ge1xuICAgICAgICByZXR1cm4gRVhBTVBMRUlURU1TW2luZGV4XTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZEV4YW1wbGVJdGVtKHBhcmVudFRpdGxlOiBzdHJpbmcsIHN1Ykl0ZW1UaXRsZTogc3RyaW5nLCBleGFtcGxlSXRlbXMpOiBFeGFtcGxlSXRlbSB7XG4gICAgICAgIGlmIChleGFtcGxlSXRlbXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBleGFtcGxlSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGV4YW1wbGVJdGVtc1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IHBhcmVudFRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudEV4YW1wbGVJdGVtID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudEV4YW1wbGVJdGVtICYmIHBhcmVudEV4YW1wbGVJdGVtLnN1Ykl0ZW1zLmxlbmd0aCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEl0ZW0gPSBwYXJlbnRFeGFtcGxlSXRlbS5zdWJJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnRpdGxlID09PSBzdWJJdGVtVGl0bGUpWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRJdGVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdWJJdGVtcy5sZW5ndGggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRDaGlsZEV4YW1wbGVJdGVtKHBhcmVudFRpdGxlLCBzdWJJdGVtVGl0bGUsIGVsZW1lbnQuc3ViSXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl19