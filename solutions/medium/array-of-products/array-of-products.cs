class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int[] products = Enumerable.Repeat(1, nums.Length).ToArray();
        int rp1 = 1;
        int rp2 = 1;

        for (int i = 0; i < nums.Length; i++) {
            products[i] *= rp1;
            rp1 *= nums[i];
            products[nums.Length - 1 - i] *= rp2;
            rp2 *= nums[nums.Length - 1 - i];
        }
        return products;
    }
}


[TestClass]
public class SolutionTests
{
    [TestMethod]
    public void TestMethod1()
    {
        Solution s = new Solution();
        int[] input = new int[] {1, 2, 3, 4};
        int[] expected = new int[] {24, 12, 8, 6};
        int[] result = s.ProductExceptSelf(input);
        CollectionAssert.AreEqual(expected, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        Solution s = new Solution();
        int[] input = new int[] {0, 1, 2, 3};
        int[] expected = new int[] {6, 0, 0, 0};
        int[] result = s.ProductExceptSelf(input);
        CollectionAssert.AreEqual(expected, result);
    }
}