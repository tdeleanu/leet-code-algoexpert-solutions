class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> products(nums.size(), 1);
        int rp1 = 1;
        int rp2 = 1;
        
        for (int i = 0; i < nums.size(); i++) {
            products[i] *= rp1;
            rp1 *= nums[i];
            products[nums.size() - 1 - i] *= rp2;
            rp2 *= nums[nums.size() - 1 - i];
        }
        return products;
    }
};

void test() {
    Solution s;
    vector<int> nums;

    // Test case 1
    nums = {1, 2, 3, 4};
    assert(s.productExceptSelf(nums) == vector<int>({24, 12, 8, 6}));

    // Test case 2
    nums = {4, 5, 1};
    assert(s.productExceptSelf(nums) == vector<int>({5, 4, 20}));

    // Test case 3
    nums = {};
    assert(s.productExceptSelf(nums) == vector<int>({}));

    cout << "All test cases passed!" << endl;
}

int main() {
    test();
    return 0;
}